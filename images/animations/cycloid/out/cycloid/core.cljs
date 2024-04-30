(ns cycloid.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [goog.string.format]))

 (defn linspace [start stop num]
    (take
      num
      (range
        start
        (.-Infinity js/window)
        (/ (- stop start) (dec num)))))

(defn inc-if [v bool]
  (if bool
    (inc v)
    v))

(defn update-state[state]
  (-> state
      (update-in [:frame] inc-if (:play? state))
      (assoc :i (/ (:frame state) 500))))
      

(defn draw-state [state]
  (q/background 0.2)
  (q/stroke 0.3 0.8 0.7)
  (q/fill 0.3)
  (q/text (str (:point-count state)) 10 20)
  (q/begin-shape (:mode state))
   (let [i (:i state) 
         r (:r state)
         point-count (:point-count state)]
     (q/text (str i) 10 10)
     (q/translate (/ (q/width) 2) (/ (q/height ) 2))
     (doseq [t (linspace 0 (* 20 q/PI) point-count)]
        (let [c (q/cos (* i t))
              s (q/sin (* i t)) ]
          (q/vertex (+ (* 2 r c) (* r (q/cos t))) 
                   (+ (* 2 r s) (* r (q/sin t))) )))
   (q/end-shape)
   (if (not (:play? state))
       (q/no-loop))))

(defn setup []
  (q/color-mode :hsb 1.0)
  (q/frame-rate 20)
  (q/background 0 0 0)
  (q/text "By halvarsu" (- (q/width) 80) (- (q/height) 10))
  (q/stroke-weight 2)
  {:play? true
   :frame 0
   :point-count 50
   :i 0
   :r 72
   :mode :points})

; (defn mouse-click [state event]
;   (println state)
;   (if (> (/ (q/width) 2) (q/mouse-x))
;     (update state :frame inc)
;     (update state :frame dec)))

(defn mouse-click [state event]
  (println state)
  (update state :play? (not (:play? state))))

; (defn save-frame [state]
;   (q/save (goog.string.format "cycloid%.2f.png" (float (:i state)) )))

(def button-choices {:a #(update %1 :point-count inc)
                     :q #(update %1 :point-count + 50)
                     :d #(update %1 :point-count dec)
                     :e #(update %1 :point-count - 50)
                     :n #(update %1 :frame inc)
                     :p #(update %1 :frame dec)
                     :x #(assoc %1 :play? (not (:play? %1)))
                     :1 #(assoc %1 :mode :points)
                     :2 #(assoc %1 :mode :lines)
                     :3 #(assoc %1 :mode :triangles)
                     :up #(update %1 :r inc)
                     :down #(update %1 :r dec)
                     :r #(assoc %1 :frame 0)})


(defn key-pressed [state event]
  (q/start-loop)
  (let [c (:key event)
        func (c button-choices)]
    (if func
      (func state)
      state)))

(q/defsketch cycloid
  :host "cycloid"
  :size [800 600]
  :draw draw-state
  :update update-state
  :setup setup
  :mouse-pressed mouse-click
  :key-pressed key-pressed
  :middleware [ m/fun-mode])

; (defn refresh []
;   (use :reload 'core.cycloid)
;   (.loop cycloid))

; ============================================================
; ============================================================
; ============================================================

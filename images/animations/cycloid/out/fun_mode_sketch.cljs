(ns fun-mode-sketch
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(def min-r 10)

(defn setup []
  ; initial state
  {:x 0 :y 0 :r min-r})

(defn update [state]
  ; increase radius of the circle by 1 on each frame
  (update-in state [:r] inc))

(defn draw [state]
  (q/background 255)
  (q/ellipse (:x state) (:y state) (:r state) (:r state)))

; decrease radius by 1 but keeping it not less than min-r
(defn shrink [r]
  (max min-r (dec r)))

(defn mouse-moved [state event]
  (-> state
      ; set circle position to mouse position
      (assoc :x (:x event) :y (:y event))
      ; decrease radius
      (update-in [:r] shrink)))

(q/defsketch example
  :size [200 200]
  :setup setup
  :draw draw
  :update update
  :mouse-moved mouse-moved
  :middleware [m/fun-mode])
; (ns cycloid.core
;   (:require [quil.core :as q :include-macros true]
;             [quil.middleware :as m]))

; (defn setup []
;   (q/frame-rate 30)
;   (q/color-mode :hsb)
;   {:color 0
;    :angle 0})

; (defn update-state [state]
;   {:color (mod (+ (:color state) 0.7) 255)
;    :angle (+ (:angle state) 0.1)})

; (defn draw-state [state]
;   (q/background 240)
;   (q/fill (:color state) 255 255)
;   (let [angle (:angle state)
;         x (* 150 (q/cos angle))
;         y (* 150 (q/sin angle))]
;     (q/with-translation [(/ (q/width) 2)
;                          (/ (q/height) 2)]
;       ; Draw the circle.
;       (q/ellipse x y 100 100))))

; (q/defsketch cycloid
;   :host "cycloid"
;   :size [500 500]
;   ; setup function called only once, during sketch initialization.
;   :setup setup
;   ; update-state is called on each iteration before draw-state.
;   :update update-state
;   :draw draw-state
;   ; This sketch uses functional-mode middleware.
;   ; Check quil wiki for more info about middlewares and particularly
;   ; fun-mode.
;   :middleware [m/fun-mode])

; ; ============================================================
; ; ============================================================
; ; ============================================================
; ; ============================================================

; (ns stuff.cycloid
;   (:require [quil.core :as q :include-macros true]
;             ; [clojure.math.numeric-tower :as math]
;             [quil.middleware :as m]))


; (defn linspace [start stop num]
;    (take
;      num
;      (range
;        start
;        Double/POSITIVE_INFINITY
;        (/ (- stop start) (dec num)))))

; (defn update-state[state]
;   (update (if (:play? state)
;             (update state :frame inc)
;             state)
;           :i (+ (:revs state) (/ (:frame state) 500))))

; (defn draw-state [state]
;   (q/background 0)
;   (q/stroke 0.3 0.8 0.7)
;   (q/fill 0.6)
;   (q/translate (/ (q/width) 2) (/ (q/height ) 2))
;   (q/begin-shape :lines)
;   (let [i (:i state) 
;         r (:r state)]
;     (q/text (str i) 10 10)
;     (doseq [t (linspace 0 (* 20 (. Math PI)) @point-count)]
;        (let [c (q/cos (* i t))
;              s (q/sin (* i t)) ]
;          (q/vertex (+ (* 2 r c) (* r (q/cos t))) 
;                   (+ (* 2 r s) (* r (q/sin t))) ))))
;   (q/end-shape)
;   (if (not (:play? state))
;       (q/no-loop)))

; (defn setup []
;   (q/color-mode :hsb 1.0)
;   (q/frame-rate 20)
;   (q/background 0 0 0)
;   (q/text "By halvarsu" (- (q/width) 80) (- (q/height) 10))
;   (q/stroke-weight 2)
;   {:revs 0
;    :play? false
;    :frame 0
;    :point-count 50
;    :i 0
;    :r 72})

; (defn mouse-click [state]
;   (if (> (/ (q/width) 2) (q/mouse-x))
;     (update state :revs inc)
;     (update state :revs dec)))

; (defn pause [state]
;   (update state :play? (#not %1)))

; (defn inc-points [state]
;   (update state :point-count inc))

; (defn dec-points [state]
;   (update state :point-count dec))

; (defn next-frame [state]
;   (update state :frame inc))

; (defn prev-frame [state]
;   (update state :frame dec))

; (defn save-frame [state]
;   (q/save (format "cycloid%.2f.png" (float (get-i)) )))

; (def button-choices {:a inc-points
;                      :d dec-points
;                      :n next-frame 
;                      :p prev-frame 
;                      :s save-frame
;                      :x pause})

; (defn button-press [state]
;   (let [button (q/key-as-keyword)
;         func (button button-choices)]
;         (func state)
;         (q/redraw))) 

; (q/defsketch cycloid
;   :host "cycloid"
;   :size [1280 800]
;   :draw draw-state
;   :update update-state
;   :setup setup
;   :mouse-pressed mouse-click
;   :key-pressed button-press
;   :middleware [m/fun-mode])

; (defn refresh []
;   (use :reload 'stuff.cycloid)
;   (.loop cycloid))

; ; ============================================================
; ; ============================================================
; ; ============================================================

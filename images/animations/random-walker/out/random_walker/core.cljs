(ns random-walker.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def width 880)
(def height 640)
(def step 8)

(defn abs [v]
  (if (< v 0)
    (- v)
    v))

(defn legal-y? [y]
  (<= (abs y) (- (/ height 2) step) ))

(defn legal-x? [x]
  (<= (abs x) (- (/ width 2) step) ))

(defn legal-pos? [[x y]]
  (and (legal-x? x)
       (legal-y? y)))

(defn update-pos [pos vel speed]
  (let [new-pos (vec (map + pos (map #(* speed %1) vel )))]
    (if (legal-pos? new-pos)
      new-pos
      pos)))

(defn update-vel [vel]
  (let [choices {0 [-1 0] 
                 1 [0 1] 
                 2 [1 0] 
                 3 [0 -1]
                 4 vel}]
  (get  choices (rand-int 5))))


(defn update-state [state]
  (-> state
      (update :pos update-pos  (:vel state) (:speed state))
      (update :vel update-vel)
      ))


(defn draw-char [state]
  (q/no-stroke)
  (q/fill 80 160 160 40)
  (let [[x y]  (:pos state)]
    (q/with-translation [(/ width 2) (/ height 2)]
    (q/ellipse x y step step))))

(defn draw-border [state]
  (q/no-stroke)
  (q/fill 255)
  (let [step  (:pix-per-unit state)
        roundoff (* step 0.2)]
    (doseq [x (range 0 width step)]
      (q/rect x 0      step step roundoff)
      (q/rect x (- height step) step step roundoff))
    (doseq [y (range step height step)]
      (q/rect 0     y step step roundoff)
      (q/rect (- width step) y step step roundoff)))
  state)

(defn draw-state [state]
  (loop [i 0
         new-state state]
    (when (< i 10000)
      (draw-char new-state) 
      (recur (inc i) (update-state new-state))))
  (q/no-loop)
  state)

(def init-state {:pix-per-unit step 
               :pos [(/ step 2) (/ step 2) ]
               :draw-points []
               :vel [1 0]
               :speed step
               :play? true})

(defn setup []
  (q/frame-rate 30)
  (let [state init-state]
    (draw-border state)
    (assoc state :graphic (q/create-graphics 100 height))))

(q/defsketch random-walker
  :host "random-walker"
  :size [width height]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])



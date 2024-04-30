import numpy as np
from matplotlib import cm
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
from velfield import velfield

fig = plt.figure()
ax = fig.add_subplot(111)

n =20 
x,y,u,v = velfield(n)


q = ax.quiver(x,y,u,v)

data = [velfield(n) for n in range(20)]

def update(framenum):
    q.set_offsets(data[framenum%20])#[0],data[framenum][1],data[framenum][2],data[framenum][3])
    return q,
    

    
ani = FuncAnimation(fig, update)
plt.show()

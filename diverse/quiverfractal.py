import numpy as np
from matplotlib import cm
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import ArtistAnimation
from velfield import velfield

fig = plt.figure()
ax = fig.add_subplot(111)


ims = []
for i in range(1,100,10):
    x,y,u,v = velfield(i)
    quiv = ax.quiver(x,y,u,v, cmap = cm.hot)
plt.show()

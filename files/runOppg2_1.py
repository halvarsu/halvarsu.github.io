from oppg2_1 import polyplot
import seaborn as sns
import matplotlib.pyplot as plt


R = [ 500, 700, 1000, 1200, 1500 ]
V = [ 1, 2, 3, 4, 5 ]
A = [ 1, 2, 3, 4, 5 ]

polyplot(R,V, xlabel='Resistance $[\Omega]$', ylabel='Potential $[V]$' )
plt.show()
polyplot(R,A, xlabel='Resistance $[\Omega]$', ylabel='Current $[A]$')
plt.show()

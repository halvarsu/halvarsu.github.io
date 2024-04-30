import numpy as np
import matplotlib.pyplot as plt

class Solver():
    def __init__(self, N, R):
        self._R = R
        self._N = N

    def solve(self, c): 
        N = self._N
        R = self._R
        self.M = np.zeros((N,N))
        self.B = np.zeros(N)
        self.V = np.zeros(N)
        
        self.r, Dr = np.linspace(0, R, N, retstep=True) 

        r = self.r

        self.M[-1,0] = 1 
        self.B[-1] = 0

        for n in range(0,N-1):
            self.M[n,n]     = -r[n]/Dr
            self.M[n,n+1]   =  r[n+1]/Dr
            self.B[n]       = (r[n+1]*c(r[n+1])+ r[n]*c(r[n]))/2

        self.V = np.linalg.solve(self.M,self.B)

    def plot(self, fig, ax):
        ax.plot(self.r,self.V)



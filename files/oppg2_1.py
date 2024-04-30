import numpy as np
import matplotlib.pyplot as plt

def polyplot(x,y, N=100, xlabel='x', ylabel='y'):

    p = np.polyfit(x,y,1)
    x_arr = np.linspace(np.min(x), np.max(x), N)
    y_arr = np.polyval(p,x_arr)
    plt.scatter(x,y)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.plot(x_arr, y_arr)

        

    
if __name__ == "__main__":
    x = np.random.random(4)
    y = np.random.random(4)
    polyplot(x,y, xlabel = 'Resistance', ylabel = 'Current')

    plt.show()

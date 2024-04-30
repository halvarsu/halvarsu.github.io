# -*- coding: utf-8 -*-

from numpy import pi, linspace, meshgrid, cos, sin

def velfield(n, length = pi):
    '''regner ut et grid og et hastighetsfelt'''
    x = linspace(-0.5*length,0.5*length, n)
    [X,Y] = meshgrid(x,x)
    u = cos(X)*sin(Y)
    v = -sin(X)*cos(Y)
    return X,Y,u,v

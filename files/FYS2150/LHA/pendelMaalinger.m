lp_all = [72 56.9 49.2 53.2 59.3 46.8 47.5 53.5 71.3 44.5 53.5 47.6 56.5 27.4]
dlp_all = [3.8 0.9 1.0 1.0 1.9 3.9 14.8 0.51 3.8 1.2 3.91 3.9 5.4 37]

lp_err = 1./sum(1./(dlp_all.^2))
lp_bar = sum(lp_all./(dlp_all.^2))*lp_err


l = 14.208;
dl = 3.8e-3;
H = 13.855;
dH = 2e-3;
h = 0.18;
dh = 10e-3;
rel_h = dh/h;
dh/dH;

lp = l - (H - h)
dlp = sqrt(dl^2 + dH^2 + dh^2)


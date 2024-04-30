function [p,err] = linRegUsikkerhet(x,y)

xsum = sum(x);
ysum = sum(y);
n = numel(x);

D = sum(x.^2) - (xsum^2)/n;
E = sum(x.*y) - (xsum*ysum)/n;
F = sum(y.^2) - (ysum^2)/n;

m =  E/D;
c = mean(y) - m*mean(x);
p = [m c];

dm  = sqrt(1/(n-2) * (D*F-E^2)/D^2);
dc  = sqrt(1/(n-2) * (D/n + mean(x)^2) * (D*F-E^2)/D^2);
err = [dm dc];
end

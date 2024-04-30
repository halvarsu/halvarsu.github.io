function [success] = testLinRegUsikkerhet()

a = 3.5;
b = 5.0;
x = 0:0.001:2;
y = a + b.*x + randn(1,length(x));

[p, err] = linRegUsikkerhet(x,y);

m = p(1);
c = p(2);
dm = err(1);
dc = err(2);
[a m dm b c dc];
success = (b < (m+dm)) & (b > (m-dm)) & (a < (c+dc)) & (a < (c+dc));


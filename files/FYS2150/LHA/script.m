%function [p,err]=linRegUsikkerhet(x,y,n)


a=3.5; %Parameter for konstantledd i generert datasett
b=5.0; %Parameter for helning i generert datasett
x=0:0.1:2;
y=a+b.*x+randn(1,length(x));

n = numel(x);
[p, err] = linRegUsikkerhet(x,y);

m = p(2);
c = p(1);
dm = err(2);
dc = err(1);

yhat = m*x + c;
xmean = mean(x)
ymean = mean(y)
maximum = yhat+dc+max([dm.*(x-xmean); dm.*(x+xmean)]);
minimum = yhat-dc-min([dm.*(x-xmean); dm.*(x+xmean)]);

x_rand = 2*rand(1,100);
y_rand = a.*x_rand + b + randn(1,length(x_rand));
max_rand = (m+dm) * x_rand + (c+dc);
min_rand = (m-dm) * x_rand + (c-dc);

sum((y_rand < max_rand) & (y_rand > min_rand))
%%

figure(1)
hold('on')

plot(x,y,'r*')
plot(x_rand,y_rand,'r*')
plot(x,yhat)

ciplot(max_rand, min_rand, sort(x_rand), [0.8 0.8 0.8])
%%


a = load('linjedata.mat');
[p,err] = linRegUsikkerhet(a.x,a.y);
p
err
%%

testLinRegUsikkerhet()



mm = imread('mm.gif', 'gif');
mm = double(mm);

[u,s,v] = svd(mm);
figure
subplot(2,1,1)
plot(diag(s))
title('Marilyn Monroe`s sigma')


B = round(255 * rand(256,256));

[u,s,v] = svd(B);
subplot(2,1,2)
plot(diag(s))
title('Noisy sigma')
axis([0 256 0 inf])
B = uint8(B);
imwrite(B,'random_B.gif','gif')
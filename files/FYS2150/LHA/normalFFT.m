function [fw,fut,power]=normalFFT(t,y,wp2,fmin);
%
%Input-parametre:
%
%t= tidsvektor [s]
%y=amplitudevektor 
%wp2       bw
%   8      256
%   9      512
%   10    1024
%   11    2048
%   12    4096
%   13    8192
%   14   16384
%   15   32768
%   16   65536
%fmin=minimal frekvens [Hz]
%
%Ut:
%
%tw=midlere tid for hvert intervall
%fw=frekvens i hvert intervall
%fut=frekvenser til plotting
%
bw=2.^wp2;

% lin=length(t);
% n=floor(lin/bw);
% t=t(1:n*bw);
% y=y(1:n*bw);
%samplingsfrekvens
fs=1/(t(2)-t(1));
%frekvensakse
fut = fs/2*linspace(0,1,bw/2);
%indeks for frekvens fmin HZ
nf=min(find(fut>fmin));

%gjør fft 
power=zeros(bw/2);
Y = fft(y,bw,1)/bw;
power=abs(Y(1:bw/2)).^2;
[ym i]=max(abs(Y(nf:bw/2)).^2);
fw=fut(i+nf);

%plot(fut,abs(Y(1:bw/2)).^2,'.-')
    

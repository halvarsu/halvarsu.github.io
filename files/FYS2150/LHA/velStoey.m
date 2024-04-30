% file = 'vel_stoey';
% filename = join(['data/' file '.mat']);
% load(filename)
% sound(data, samplerate)

% [f0, fut, power] = normalFFT(time,data,wp2,fin);

%[temp, iN] = min(abs(fut - 3500))
% fig = figure()
%plot(fut(1:iN),sqrt(power(1:iN)))
% xlabel('Frekvens [Hz]')
% ylabel('Amplitude')
% % 
% set(fig, 'Position', [0 0 1200 900])
% fig.PaperPositionMode = 'auto'
% fig_pos = fig.PaperPosition;
% fig.PaperSize = [fig_pos(3) fig_pos(4)];
% saveas(fig, join([file 'Frekv.pdf']))

%%
file = 'vel_stoey';
filename = join(['data/' file '.mat']);
load(filename)
fig = figure();

plot(time, data)
xlabel('Tid [s]')
ylabel('Amplitude')

set(fig, 'Position', [0 0 1200 900])
fig.PaperPositionMode = 'auto'
fig_pos = fig.PaperPosition;
fig.PaperSize = [fig_pos(3) fig_pos(4)];
saveas(fig, join([file 'Tid.pdf']))

%%

maxfreq_i = 200;
file = 'vel_stoey';
%file = 'vel_ivar';
filename = join(['data/' file '.mat']);
load(filename)

[X,Y] = meshgrid(tw, fut(2:maxfreq_i));
[tw,fw,n,fut,power]=stykkevisFFT(time,data,wp2,fin);

fig = figure();
p = meshc(X,Y,transpose(power(:,2:maxfreq_i)))
% p.set('EdgeColor', 'none');
% grid('off')
xlabel('tid [s]')
ylabel('frekvens [Hz]')
zlabel('Energi')
set(fig, 'Position', [0 0 1200 900])
fig.PaperPositionMode = 'auto'
fig_pos = fig.PaperPosition;
fig.PaperSize = [fig_pos(3) fig_pos(4)];
saveas(fig, join([file 'SFFT.pdf']))

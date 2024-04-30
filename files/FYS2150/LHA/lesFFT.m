file = 'vel_ivar';
%%
file = 'vel_stoey';
%%
file = 'vel_frekvensmaaling';
%%
filename = join(['data/' file '.mat']);
a = load(filename)
time(end)
%%
sound(data, samplerate)
%%

fig = figure(1), plot(time, data), xlabel('tid [s]'), ylabel('amplitude')
%%

[tw,fw,n,fut,power]=stykkevisFFT(time,data,wp2,0);



figure(2),plot(tw,fw,'o'),xlabel('tid, s'),ylabel('frekvens, Hz')
i=1;
figure(3),plot(fut(2:end),power(:,2:end),'.-')
%%
length(power)
%%
maxfreq_i = 1600;

[X,Y] = meshgrid(tw, fut(2:maxfreq_i));
fig = figure(4);
p = meshc(X,Y,transpose(power(:,2:maxfreq_i)))
% p.set('EdgeColor', 'none');
% grid('off')
xlabel('tid [s]')
ylabel('frekvens [Hz]')
set(fig, 'Position', [0 0 1200 900])
fig.PaperPositionMode = 'auto'
fig_pos = fig.PaperPosition;
fig.PaperSize = [fig_pos(3) fig_pos(4)];
saveas(fig, join([file '.pdf']))
%%



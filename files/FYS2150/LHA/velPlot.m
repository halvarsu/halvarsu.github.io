file = 'vel_';
% Last referansemaaling
filename = join(['data/' file 'frekvensmaaling.mat']);
load(filename)

[f0, fut, power] = normalFFT(time,data,wp2,fin);
freq_res = fut(2) - fut(1)
tid_res  = tw(2) - tw(1)
[ym, i]  = max(power);
f0 = fut(i)

produktet = tid_res * freq_res

figure()
plot(fut,power)
xlabel('Frekvens [Hz]')
ylabel('Amplitude')

%%


for i = 1:1:10
    filename = join(['data/' file int2str(i) '.mat']);
    vel_data(i) = load(filename);
end
%%

i = 8
sound(vel_data(i).data, vel_data(i).samplerate)

%%
i0 = 1;

indices = [3 4 5 6 9 10];
for i = 1:length(indices)
    ind = indices(i);
    tw = vel_data(ind).tw;
    fw = vel_data(ind).fw;
    fin = vel_data(ind).fin;
    
    vel = frekvToVel(fw, f0);
    [temp,i_passering] = min(sign(vel(4:end-1).*vel(5:end)));
    tid = tw - tw(i_passering+3);
    max_vel(ind) = max(vel);
    max_freq(ind) = max(fw);
    figure(1),hold('on'),plot(tid,vel,'-o'),xlabel('tid, s'),ylabel('hastighet, m/s');
    %figure(),plot(tw,fw,'o'),hold('on'),plot(tw,f0*ones(size(tw))),xlabel('tid, s'),ylabel('frekvens, Hz');
    title(ind);
    % plot(data(i).time, data(i).data)
end

indices
legendMaker = @(x) join(['Passering ' int2str(x)])
test = arrayfun(legendMaker, indices,'UniformOutput',false)
legend(test,'Location','southwest')

%%
a
time(end)
samplerate/length(time)

%samplerate/length(time)
temp = diff(fut);
freq_res = temp(end)
temp = diff(tw);
tid_res = temp(end)
tid_res * freq_res
max_freq
vel_res = frekvToVel(f0+freq_res, f0) 
f0


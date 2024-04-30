file = 'aks_';
% Last referansemaaling
filename = join(['data/' file 'frekvensmaaling.mat']);

load(filename)

[f0, fut, power] = normalFFT(time,data,wp2,fin);
freq_res = fut(2) - fut(1)
tid_res  = tw(2) - tw(1)
[ym, i_maxpow]  = max(power);

produktet = tid_res * freq_res

figure()
plot(fut,power)
xlabel('Frekvens [Hz]')
ylabel('Amplitude')
%%

h_i = 1:3;
for h = h_i
    for i = 1:1:5
        filename = join(['data/' file 'h' int2str(h) '_' int2str(i) '.mat']);
        aks_data(h,i) = load(filename);
        d = aks_data(h,i);
        [f0, fut, power] = normalFFT(aks_data(h,i).time,aks_data(h,i).data,aks_data(h,i).wp2,aks_data(h,i).fin);
        f0
        f0_values(h,i) = f0;
    end
end

%%
i0 = 1;
indices = [1 2 0 4 5;
           1 2 3 4 5; 
           1 2 3 4 5];
           %1:5;%[3 4 5 6 9 10];

startpkt = [6  6  0 3 6 ;
            2 3 3 2 2;
            5 5 4 5 4];

sluttpkt = [12 11 0 9 11;
            9 10 10 9 8;
            12 12 11 12 12 ];

legendMaker = @(x) join(['Passering ' int2str(x)]);
markers = ['o','x','v','s','d'];

for h = h_i
    valid_i = indices(h,:);
    valid_i = valid_i(valid_i > 0);

    for ind = valid_i
        tw = aks_data(h,ind).tw;
        fw = aks_data(h,ind).fw;
        fin = aks_data(h,ind).fin;
        
        vel = frekvToVel(fw, fw(1), 21.7);

        % dvel = (vel(end) - vel(1))/(length(vel)-1);
        % korreksjon = vel(1) + dvel.*(0:length(vel)-1)
        % vel = vel - korreksjon;
        %v0 = frekvToVel(fw, )
        i0 = startpkt(h,ind);
        iN = sluttpkt(h,ind);

        % [p, err] = linRegUsikkerhet(tw(i0:iN), vel(i0:iN));
        errors = abs(frekvToVel(fw+freq_res,fw(1),21.7)-vel);
        [m,dm,c,dc,sigma] = fitLineWithErrors(tw(i0:iN), vel(i0:iN),errors(i0:iN), h+3);

        aks(h,ind) = m;%p(1);
        aks_err(h,ind) = dm;%err(1);
        [temp,i_passering] = min(sign(vel(4:end-1).*vel(5:end)));
        %tid = tw - tw(i_passering+3);
        max_vel(ind) = max(vel);
        max_freq(ind) = max(fw);
        fig = figure(h);
        hold('on'),plot(tw,vel,join(['-' markers(ind)])),xlabel('tid, s'),ylabel('hastighet, m/s');
        % title(h);
    end

    leg = arrayfun(legendMaker, valid_i,'UniformOutput',false);
    legend(leg,'Location','southwest')
    set(fig, 'Position', [0 0 1200 900])
    fig.PaperPositionMode = 'auto'
    fig_pos = fig.PaperPosition;
    fig.PaperSize = [fig_pos(3) fig_pos(4)];
    saveas(fig, join(['aks_h' int2str(h) '.pdf']))
end


%%

for h = 1:3
    mask = aks(h,:) > 0;
    a = aks(h,mask);
    a_err = aks_err(h,mask)
    aks_err_w(h) = 1 / sum(1./a_err.^2)
    aks_weighted(h) = sum(a./(a_err.^2)) * aks_err_weighted(h);
    aks_mean(h) = mean(a);
    aks_err_uw(h) = std(a);
end

aks
aks_err
aks_err_weighted
aks_err_uw
aks_weighted
aks_mean
%%
% Find angles and their errors
L = [959 975 975] %mm
h = [211 150 134] %mm
dL = sqrt(4*0.5^2 + 1e-3.*L + 0.5^2) % mm
dh = sqrt(0.5^2 + 1e-3.*h + 0.5^2)   % mm

A = h./L
dA = h./L.*sqrt((dh./h).^2 + (dL./L).^2)

theta = asin(A) * 360/(2*pi)
dtheta = dA./sqrt(1-A.^2)* 360/(2*pi)
%%

for i = 1:3
    fprintf('a_theoretical = %f, a_calc = %f\n', 9.189*A(i), aks_mean(i));
end


fig = figure()
errorbar(A.*9.819, dA.*9.819,'-.o')
hold on
errorbar(aks_mean, aks_err_uw, '-.s')
legend('Analytisk','Maalt doppler','Location','southwest')
set(fig, 'Position', [0 0 1200 900])
fig.PaperPositionMode = 'auto'
fig_pos = fig.PaperPosition;
fig.PaperSize = [fig_pos(3) fig_pos(4)];
saveas(fig, join(['grav.pdf']))

g = aks_mean./sin(theta*2*pi/360)
%g_err = 
dg =  g.* sqrt((aks_err_uw./aks_mean).^2 + (dA./A).^2)
a_err
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


function vel=frekvToVel(fm, f0, temp);

if nargin < 3
    temp = 20;
end

c = 331 + 0.606 * temp; % m/s
vel = c*(1-f0./fm);

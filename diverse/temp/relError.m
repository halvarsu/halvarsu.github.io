function err = relError( A, Ak )
%UNTITLED10 Summary of this function goes here
%   Detailed explanation goes here
    [m,n] = size(A);
    diffnorm = 0;
    anorm = 0;
    for i = 1:m
        for j = 1:n
            diffnorm = diffnorm + sqrt((A(i,j)-Ak(i,j))^2);
            anorm = anorm + sqrt(A(i,j)^2);
        end
    end
    err = diffnorm/anorm;
end


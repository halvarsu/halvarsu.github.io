function AK = svdApprox(A,k)
    r = rank(A);
    if k > r
        msg = 'k should be lower than rank(A)';
        error(msg)
    end
    
    [u,s,v] = svd(A);
    [zs] = size(A);
    AK = zeros(zs);
    for i = 1:k
        AK = AK + u(:,i)*s(i,i)*v(:,i).';
    end
end

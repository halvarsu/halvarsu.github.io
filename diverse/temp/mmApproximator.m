mm = imread('mm.gif', 'gif');
mm = double(mm);
size(mm)
rank(mm)
rank(mm,0.001)

mmk8 = svdApprox(mm, 8);
mmk8 = uint8(mmk8);
imwrite(mmk8, 'mmk8.gif', 'gif');

mmk32 = svdApprox(mm, 32);
mmk32 = uint8(mmk32);
imwrite(mmk32, 'mmk32.gif', 'gif');

mmk = svdApprox(mm,96);
mmk = uint8(mmk);
imwrite(mmk, 'mmktest.gif', 'gif');
mmk = double(mmk);
relError(mm, mmk)
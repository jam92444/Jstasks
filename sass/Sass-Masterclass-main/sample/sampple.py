sample = [1,2,3,4,5,1,2,3,5];

unique = []
for num in sample:
    current = num;
    if(len(unique)<1):
        unique.append(current)
    for x in range(len(unique)): 
        if current in unique:
            pass;
        else:
            unique.append(current);   
print(unique)


a = 10
b = 220
a= a+b;
b=a-b;

print(a,b)
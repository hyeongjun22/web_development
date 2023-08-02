el=[1,2,3,4,5,3,4,5,6,7]
li=list()
for i in el:
    a=1
    for j in li:
        if j==i:
            a=0      
    if a==1:
        li.append(i)
print(li)
gabarito = ['a','b','a','c','d']
rep1 = ['a','b','a','c','d']
rep2 = ['c','d','e','c','d']
exams = [rep1,rep2]

count = 0
result =0

for exam in exams:
    index = 0
    for answer in exam:
        if answer == gabarito[index]:
            count +=2
        index +=1
    result = count
    print(result/len(exams))

#['c','d','e','c','d']
import random as rd
import matplotlib.pyplot as plt

MAX_GENE = 1000 # 최대 반복
POP_SIZE = 8 # 염색체 개수
MUT_RATE = 0.3 # 돌연변이 확률
SIZE = 8 # 염색체의 원소 개수
GOAL = 1018 # 최단거리

adj = [[0, 30, 140, 75, 168, 237, 303, 325, 268],
[30, 0, 140, 105, 198, 247, 315, 334, 257],
[140, 140, 0, 173, 205, 119, 190, 200, 141],
[75, 105, 173, 0, 102, 238, 293, 323, 313],
[168, 198, 205, 102, 0 ,213, 247, 287, 340],
[237, 247, 119, 238, 213, 0, 71, 88, 173],
[303, 315, 190, 293, 247, 71, 0, 44, 222],
[325, 334, 200, 323, 287, 88, 44, 0, 202],
[268, 257, 141, 313, 340, 173, 222, 202, 0]]

'''
0:서울, 1:인천, 2:대전, 3:춘천, 4:강릉, 5:대구, 6:울산, 7:부산, 8:광주
genes = 1차원 배열[1,2,3,4,5,6,7,8] -> 1~8순서로 순회하고 0(서울)로 돌아옴
'''

class Chromosome:
    def __init__(self, g=[]): # 생성자
        self.genes = g.copy()
        self.fitness = 0
        if self.genes.__len__() == 0:
            self.genes = [*range(1, SIZE + 1)]
            rd.shuffle(self.genes) # [1,2,3,4,5,6,7,8]을 무작위로 순서변경
        self.cal_fitness()

    def getFitness(self):
        return self.fitness

    def cal_fitness(self): # 적합도 불러오기
                          # 서울 -> 첫번째도시 + 마지막도시 -> 서울
        self.fitness = adj[0][self.genes[0]] + adj[self.genes[SIZE-1]][0]

        for i in range(SIZE - 1):
            self.fitness += adj[self.genes[i]][self.genes[i+1]]
                
        return self.fitness

def print_p(pop): # 출력
    for i, x in enumerate(pop):
        print(f"염색체 # {i} = {x.genes} 적합도 = {x.getFitness()}")
    print()
    
def select(pop): # 부모 선택
    # 적합도에 비례해 선택하면 안좋은 개체를 선택할 확률이 너무 높으므로 좋은 염색체를 남길 확률 더 증가
    pro = [2 ** i for i in range(SIZE - 1, -1, -1)] 
    pick = rd.uniform(0, sum(pro))
    current = 0
    for c in range(SIZE):
        current += pro[c]
        # 룰렛 알고리즘
        if current > pick:
            return pop[c]

            
def crossover(pop): # 교배
    father = select(pop)
    mother = select(pop)
    cross1, cross2 = sorted(rd.sample(range(SIZE + 1), 2)) # 0 ~ SIZE 중 무작위로 2개선택
    fMid = father.genes[cross1:cross2] # 교환 구역
    mMid = mother.genes[cross1:cross2]

    child1 = []
    child2 = []
    for i in range(SIZE):
        if len(child1) == cross1: # 교환 구역 시작점에 오면 교환 구역 추가
            child1 += mMid
        if len(child2) == cross1:
            child2 += fMid

        if father.genes[i] not in mMid: # 교환 구역에 없는 원소 추가
            child1.append(father.genes[i])
        if mother.genes[i] not in fMid:
            child2.append(mother.genes[i])

        if len(child1) == cross1:
            child1 += mMid
        if len(child2) == cross1:
            child2 += fMid

    return (child1, child2)

def mutate(c): # 돌연변이
    if rd.random() < MUT_RATE:
        if rd.random() < 0.5: # 상호 교환 연산자 - 단순히 두 도시 변경
            a, b = rd.sample(range(SIZE), 2)
            c.genes[a], c.genes[b] = c.genes[b], c.genes[a]
        else: # 역치 연산자 - 두 점을 선택 후 그 사이의 순서 변경
            a, b = sorted(rd.sample(range(SIZE + 1), 2))
            if a != 0:
                c.genes = c.genes[:a] + c.genes[b-1:a-1:-1] + c.genes[b:]
            else:
                c.genes = c.genes[:a] + c.genes[b-1::-1] + c.genes[b:]

def getProgress(fitnessMean, fitnessBest, population): # 추이 반영
    fitnessSum = 0 # 평균을 구하기 위한 합계
    for c in population:
        fitnessSum += c.getFitness()
    fitnessMean.append(fitnessSum / POP_SIZE) # 세대의 평균 적합도 추이
    fitnessBest.append(population[0].getFitness()) # 세대의 적합도가 가장 좋은 염색체의 적합도 추이

def drawChart(x, fitnessMean, fitnessBest, generation): # 추이 그래프 그리기
    plt.plot(x, fitnessMean, "-b", label="mean fitness", linewidth="0.5")
    plt.plot(x, fitnessBest, "-r", label="best fitness", linewidth = "0.5")
    plt.axhline(GOAL, 0, generation, color='lightgray', linestyle='--', label="optimum")
    plt.axis([0, generation * 1.1, 1000, 2500])
    plt.xlabel("generation")
    plt.ylabel("fitness")
    plt.legend(loc='upper left')
    plt.show()

    
def main():
    population = []
    fitnessMean = [] # 평균 적합도 추이
    fitnessBest = [] # 첫번째 염색체의 적합도 추이

    for _ in range(POP_SIZE):
        population.append(Chromosome())
    population.sort(key = lambda x: x.getFitness())
    generation = 0
    while 1:
        print("세대 번호 =", generation)
        print_p(population)
        generation += 1
        
        if population[0].getFitness() == GOAL or generation == MAX_GENE:
            getProgress(fitnessMean, fitnessBest, population)
            break
        
        new_pop = []
        
        for _ in range(POP_SIZE // 2):
            c1, c2 = crossover(population)
            new_pop.append(Chromosome(c1))
            new_pop.append(Chromosome(c2))
            
        population = new_pop.copy()
        for c in population:
            mutate(c)
        population.sort(key = lambda x: x.cal_fitness())

        getProgress(fitnessMean, fitnessBest, population)
        
    drawChart(range(1, generation + 1), fitnessMean, fitnessBest, generation)


if __name__ == '__main__':
    main()

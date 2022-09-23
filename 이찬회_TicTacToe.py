def go(turn):
    # 만약 현재 맵 상태에서 상대턴이 이겼다면 더 수를 둘 필요가 없다.
    if test(3 - turn):  # 3 - turn은 상대방을 의미한다
        return [0, 1, 0]

    result = [0, 0, 0]  # [이김, 짐, 총 탐색 횟수]
    for y in range(3):
        for x in range(3):
            if board[y][x] == 0:
                board[y][x] = turn
                nextResult = go(3 - turn)  # dfs

                for i in range(3):  # 빈칸을 모두 탐색하여 각 횟수들을 더함
                    result[i] += nextResult[i]
                board[y][x] = 0
                result[2] += 1

    # 여기가 중요. 이긴 횟수와 진 횟수를 바꿔서 반환 - Min Max Algorithm
    return [result[1], result[0], result[2]]


def test(turn):  # 결과가 나왔는지 체크
    for y in range(3):
        if board[y][0] == turn and board[y][0] == board[y][1] and board[y][1] == board[y][2]:
            return True

    for x in range(3):
        if board[0][x] == turn and board[0][x] == board[1][x] and board[1][x] == board[2][x]:
            return True

    if board[0][0] == turn and board[0][0] == board[1][1] and board[1][1] == board[2][2]:
        return True

    if board[0][2] == turn and board[0][2] == board[1][1] and board[1][1] == board[2][0]:
        return True

    return False


def computerTurn(board):
    order = 0
    for i in range(3):
        for j in range(3):
            if board[i][j] != 0:
                order += 1
    turn = 1 if order % 2 == 0 else 2

    optimum = [-1, -1]  # 승률이 가장 높은 자리
    maxWinRate = -1
    for i in range(3):
        for j in range(3):
            if board[i][j] == 0:
                board[i][j] = turn
                result = go(turn)  # [이긴 횟수, 진 횟수, 총 탐색 횟수]를 반환
                winRate = (result[0] / result[2]) - (result[1] / result[2])
                if maxWinRate < winRate:  # 이길확률 - 질 확률이 제일 높은 곳
                    maxWinRate = winRate
                    optimum = [i, j]
                board[i][j] = 0

    board[optimum[0]][optimum[1]] = turn  # 최적의 장소에 착수


def userTurn(board):
    while 1:
        print("행과 열을 입력하세요. 예)2 3    게임종료는 -1, -1")
        try:
            y, x = map(int, input().split())
        except:
            print("빈칸이 아니거나 잘못된 입력입니다.")
            continue
        if y == -1 and x == -1:
            exit(0)

        if board[y-1][x-1] == 0:
            board[y-1][x-1] = 1
            return

        print("빈칸이 아니거나 잘못된 입력입니다.")


def printBoard():
    print(" |1|2|3|")
    print("--------")
    for i in range(3):
        print(str(i + 1) + "|", end="")
        for j in range(3):
            if board[i][j] == 1:
                print("O|", end='')
            elif board[i][j] == 2:
                print("X|", end='')
            else:
                print(" |", end='')
        print("\n--------")


board = [[0] * 3 for _ in range(3)]  # 사용자는 1 컴퓨터는 2로 저장
print("사용자가 선공입니다. 사용자 : O / 컴퓨터 X")
for i in range(9):
    userTurn(board) if i % 2 == 0 else computerTurn(board)
    printBoard()

    if test(1):
        print("사용자가 이겼습니다.")
        exit(0)
    if test(2):
        print("컴퓨터가 이겼습니다.")
        exit(0)
print("비겼습니다.")

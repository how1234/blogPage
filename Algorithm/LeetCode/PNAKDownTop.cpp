#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

// P(1, A, k) = k>A ? 0 : 1/(A+1);
// P(2, A, k) = Sum(k' = 0...A, P(1, A, k') * P(1, k', k));
// P(3, A, k) = Sum(k' = 0...A, P(2, A, k') * P(1, k', k));
// P(n, A, k) = Sum(k' = 0...A, P(n-1, A, k') * P(1, k', k));
//P(N, A, k)指的是A0 = A，取N次之后取到k的概率
//你取第N次的时候取到k的概率 就是取N-1次的时候取到每个数字kk之后再取到k的概率的和
double P(int N, int A, int k) {
  auto memo = vector<vector<double>>(A + 1, vector<double>(A + 1));
  auto memo1 = vector<vector<double>>(A + 1, vector<double>(A + 1));
  auto memo2 = vector<vector<double>>(A + 1, vector<double>(A + 1));

  // init
  for (int a = 0; a <= A; ++a) {
    for (int k = 0; k <= A; ++k) {
      memo1[a][k] = memo[a][k] = k > a ? 0 : 1.0 / (a + 1);
    }
  }

  for (int n = 1; n < N; ++n) {
    for (int a = 0; a <= A; ++a) {
      for (int k = 0; k <= A; ++k) {
        memo2[a][k] = 0;
        for (int kk = 0; kk <= A; ++kk) {
          memo2[a][k] += memo1[a][kk] * memo[kk][k];
        }
      }
    }
    swap(memo1, memo2);
  }
  return memo1[A][0];
}

int main(int argc, char const *argv[]) {
  int T;
  cin >> T;
  cout << setprecision(5) << fixed;
  for (int i = 1; i <= T; ++i) {
    int N, A;
    cin >> N >> A;
    cout << "Case #" << i << ": " << P(N, A, 0) << "\n";
  }

  return 0;
}

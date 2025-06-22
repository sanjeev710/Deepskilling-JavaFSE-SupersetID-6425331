import java.util.Scanner;

public class FinancialForecast {
    public static double calculateFutureValueRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculateFutureValueRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static double calculateFutureValueIterative(double presentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            presentValue *= (1 + growthRate);
        }
        return presentValue;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Present Value: ");
        double presentValue = scanner.nextDouble();

        System.out.print("Enter Annual Growth Rate (e.g., 0.05 for 5%): ");
        double growthRate = scanner.nextDouble();

        System.out.print("Enter Number of Years: ");
        int years = scanner.nextInt();

        double futureValueRecursive = calculateFutureValueRecursive(presentValue, growthRate, years);

        double futureValueIterative = calculateFutureValueIterative(presentValue, growthRate, years);

        System.out.printf("\n--- Financial Forecast Result ---\n");
        System.out.printf("Using Recursion: Future Value after %d years = %.2f\n", years, futureValueRecursive);
        System.out.printf("Using Iteration: Future Value after %d years = %.2f\n", years, futureValueIterative);

        scanner.close();
    }
}

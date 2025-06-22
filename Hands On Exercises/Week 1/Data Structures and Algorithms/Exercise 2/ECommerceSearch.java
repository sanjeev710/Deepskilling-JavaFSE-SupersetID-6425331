import java.util.Arrays;
import java.util.Scanner;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }
}

public class ECommerceSearch {
    public static Product linearSearch(Product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(targetName)) {
                return products[i];
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);

            if (cmp == 0) {
                return products[mid];
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Shirt", "Fashion")
        };

        System.out.print("Enter product name to search: ");
        String searchTerm = scanner.nextLine();

        Product linearResult = linearSearch(products, searchTerm);
        System.out.println("\nLinear Search Result:");
        System.out.println(linearResult != null ? linearResult : "Product not found");

        Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));

        Product binaryResult = binarySearch(products, searchTerm);
        System.out.println("\nBinary Search Result:");
        System.out.println(binaryResult != null ? binaryResult : "Product not found");

        scanner.close();
    }
}

import java.util.Scanner;

class Ex05 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite uma string para inverter: ");
        String inicial = sc.nextLine();

        String invertida = inverterString(inicial);
        System.out.println("String invertida: " + invertida);
        sc.close();
    }

    public static String inverterString(String str) {
        char[] charArray = str.toCharArray();
        int esquerda = 0;
        int direita = charArray.length - 1;

        while (esquerda < direita) {
            char temp = charArray[esquerda];
            charArray[esquerda] = charArray[direita];
            charArray[direita] = temp;
            esquerda++;
            direita--;
        }
        return new String(charArray);
    }
}
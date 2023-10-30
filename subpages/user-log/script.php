<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") { //metoda do przesyłu danych

        $servername = "localhost"; //zmienna ustalająca nazwe serwera
        $username = "root"; //zmienna ustalająca nazwe użytkownika
        $password = "password"; //zmienna ustalająca hasło
        $dbname = "mydatabase"; //zmienna ustalająca nazwe bazy danych

        $conn = new mysqli($servername, $username, $password, $dbname); //tworzy połączenie z bazą danych

        if ($conn->connect_error) { //sprawdza połączenie z bazą danych
            die("Błąd połączenia z bazą danych: " . $conn->connect_error); //jeżeli wystąpi błąd połączenia zakończy się ono oraz zostanie wyświetlona informacja
        }

        $username = $_POST["username"]; //odczytuje nazwe użytkownika z formularza w HTML
        $password = $_POST["password"]; //odczytuje hasło z formularza w HTML
        $email = $_POST["email"]; //odczytuje email z formularza w HTML

        $check_query = "SELECT * FROM users WHERE username='$username'"; //zapytanie które sprawdza czy użytkownik już istnieje
        $check_result = $conn->query($check_query); //wykonuje zapytanie do bazy danych

        if ($check_result->num_rows > 0) { //sprawdza czy wynik jest większy od zera (gdy jest to znaczy że użytkownik już istnieje)
            echo "Użytkownik o podanej nazwie już istnieje. Proszę wybrać inną nazwę."; //wypisuje informacje o istnieniu użytkownika
        } else {
            $hash_password = password_hash($password, PASSWORD_DEFAULT); //haszowanie hasła

            $insert_query = "INSERT INTO users (username, password, email) VALUES ('$username', '$hash_password', '$email')"; //wstawia dane do bazy danych

            if ($conn->query($insert_query) === TRUE) { //sprawdza czy rejestracja sie powiodła
                echo "Rejestracja udana. Możesz teraz zalogować się <a href='login.php'>tutaj</a>."; //wyświetla informacje o udanym logowaniu
            } else {
                echo "Błąd podczas rejestracji: " . $conn->error; //wyświetla informacje że logowanie się nie powiodło
            }
        }

        $conn->close(); //zamyka połączenie z bazą danych
    }
    ?>
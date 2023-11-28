<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $servername = "localhost";
        $username = "root";
        $password = "password";
        $dbname = "mydatabase";

        $conn = new mysqli($servername, $username, $password, $dbname); 

        if ($conn->connect_error) { 
            die("Błąd połączenia z bazą danych: " . $conn->connect_error);  
        }

        $username = $_POST["username"]; 
        $password = $_POST["password"]; 
        $email = $_POST["email"]; 

        $check_query = "SELECT * FROM users WHERE username='$username'"; 
        $check_result = $conn->query($check_query); 

        if ($check_result->num_rows > 0) { 
            echo "Użytkownik o podanej nazwie już istnieje. Proszę wybrać inną nazwę."; 
        } else {
            $hash_password = password_hash($password, PASSWORD_DEFAULT);

            $insert_query = "INSERT INTO users (username, password, email) VALUES ('$username', '$hash_password', '$email')"; 

            if ($conn->query($insert_query) === TRUE) { 
                echo "Rejestracja udana. Możesz teraz zalogować się <a href='login.php'>tutaj</a>."; 
            } else {
                echo "Błąd podczas rejestracji: " . $conn->error; 
            }
        }

        $conn->close();
    }
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./user-log-style.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo"><a href="../../index.html"><span class="logospan">Quizify</span></a></div>
            <div class="premium"><i class="icon-diamond"></i></div>
            <div class="user"><i class="icon-user"></i></div>
        </div>
        <div class="content">
            <div class="login">
                <div class="login-form">
                    <h2>Loguj</h2>
                    <form method="post" action="./user-log.php">
                        Login: <input type="text" name="login"><br>
                        Hasło: <input type="password" name="password"><br>
                        <input type="submit" name="login_user" value="Zaloguj">
                    </form>
                </div>
            </div>
            <div class="register">
                <div class="register-form">
                    <h2>Formularz rejestracji</h2>
                    <form method="post" action="./user-log.php">
                        Login: <input type="text" name="login"><br>
                        Hasło: <input type="password" name="password"><br>
                        <input type="submit" name="register" value="Zarejestruj">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <?php
        $host = 'localhost';
        $username = 'root';
        $password = '';
        $database = 'projop';

        $conn = new mysqli($host, $username, $password, $database);

        if ($conn->connect_error) {
            die("Błąd połączenia: " . $conn->connect_error);
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
            $login = $_POST['login'];
            $password = $_POST['password'];

            if (empty($login) || empty($password)) {
                echo "<script>alert('Proszę wypełnić wszystkie pola.')</script>";
            } else {
                $check_query = "SELECT * FROM users WHERE Name='$login'";
                $result = $conn->query($check_query);
                if ($result->num_rows > 0) {
                    echo "<script>alert('Użytkownik o podanym loginie już istnieje.')</script>";
                } else {
                    $insert_query = "INSERT INTO users (Name, Surname) VALUES ('$login', '$password')";
                    if ($conn->query($insert_query) === TRUE) {
                        echo "<script>alert('Rejestracja zakończona pomyślnie.')</script>";
                    } else {
                        echo "Błąd podczas rejestracji: " . $conn->error;
                    }
                }
            }
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login_user'])) {
            $login = $_POST['login'];
            $password = $_POST['password'];

            if (empty($login) || empty($password)) {
                echo "<script>alert('Proszę wypełnić wszystkie pola.')</script>";
            } else {
                $check_query = "SELECT * FROM users WHERE Name='$login' AND Surname='$password'";
                $result = $conn->query($check_query);
                if ($result->num_rows == 1) {
                    echo "<script>alert('Pomyślnie zalogowano.')</script>";
                } else {
                    echo "<script>alert('Nieprawidłowy login lub hasło.')</script>";
                }
            }
        }

        $conn->close();
    ?>
</body>
</html>
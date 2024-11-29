<?php
require 'db.php';

// CREATE (POST) - Menambahkan berita baru
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Menyaring dan memvalidasi data
    $data = json_decode(file_get_contents("php://input"));
    
    // Debugging: Menampilkan data yang diterima
    error_log("Received data: " . print_r($data, true)); // Ini akan menulis log ke file error_log

    // Memastikan bahwa data yang dibutuhkan ada
    if (isset($data->title) && isset($data->content)) {
        $title = $data->title;
        $content = $data->content;

        // Validasi jika title atau content kosong
        if (empty($title) || empty($content)) {
            echo json_encode(["error" => "Title and content cannot be empty."]);
            exit;
        }

        // Menyimpan berita baru ke dalam database
        $sql = "INSERT INTO news (title, content) VALUES (:title, :content)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':content', $content);

        try {
            $stmt->execute();
            echo json_encode(["message" => "News created successfully"]);
        } catch (PDOException $e) {
            echo json_encode(["error" => "Error saving news: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["error" => "Title and content are required."]);
    }
}

// READ (GET) - Mendapatkan daftar berita
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $stmt = $pdo->query("SELECT * FROM news");
    $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($news);
}

// UPDATE (PUT) - Memperbarui berita
if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;
    $title = $data->title;
    $content = $data->content;

    $sql = "UPDATE news SET title = :title, content = :content WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':content', $content);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    echo json_encode(["message" => "News updated successfully"]);
}

// DELETE (DELETE) - Menghapus berita
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;

    $sql = "DELETE FROM news WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    echo json_encode(["message" => "News deleted successfully"]);
}
?>

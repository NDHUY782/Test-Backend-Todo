# To-Do List Backend

## 📌 Giới thiệu

Đây là backend cho ứng dụng To-Do List, được xây dựng bằng **Node.js**, **Express**, **Typescript** và **TypeORM** với cơ sở dữ liệu **SQL**. API hỗ trợ CRUD

## 🛠️ Công nghệ sử dụng

- **Node.js** + **Express** : Framework backend
- **TypeORM**: ORM để làm việc với cơ sở dữ liệu
- **SQL**: Hệ quản trị cơ sở dữ liệu
- **Jest + Supertest**: Kiểm thử API

## 🚀 Cài đặt

### 1. Clone repository

```sh
git clone https://github.com/NDHUY782/Test-Backend-Todo
cd test-backend-todo
```

### 2. Cài đặt dependencies

```sh
npm install
```

### 3. Chạy ứng dụng

```sh
npm run dev
```


## 📡 API Endpoints

| Method     | Endpoint              | Mô tả                          |
| ---------- | --------------------- | ------------------------------ |
| **GET**    | `/api/`               | Lấy danh sách tất cả tasks     |
| **POST**   | `/api/tasks`          | Tạo mới một task               |
| **GET**    | `/api/:task_id`       | Lấy thông tin một task theo id |
| **PUT**    | `/api/:task_id`       | Cập nhật một task              |
| **DELETE** | `/api/:task_id`       | Xóa một task                   |

## 🧪 Chạy kiểm thử

Chạy các test case bằng Jest:

```sh
npm run test
```


module.exports = {
    payload: {
        completeData: {
            name: 'Buku A',
            year: '2010',
            author: 'John Doe',
            summary: 'Lorem ipsum dolor sit amet',
            publisher: 'Muhammad Akbar',
            pageCount: 100,
            readPage: 25,
            reading: false,
            bookId: '',
        },
        withoutName: {
            year: '2010',
            author: 'John Doe',
            summary: 'Lorem ipsum dolor sit amet',
            publisher: 'Muhammad Akbar',
            pageCount: 100,
            readPage: 25,
            reading: false,
            bookId: '',
        },
        readMoreThanPageCount: {
            name: 'Buku A',
            year: '2010',
            author: 'John Doe',
            summary: 'Lorem ipsum dolor sit amet',
            publisher: 'Muhammad Akbar',
            pageCount: 80,
            readPage: 90,
            reading: false,
            bookId: '',
        },
        updateCompleteData: {
            name: 'Buku B',
            year: '2011',
            author: 'Jane Doe',
            summary: 'Lorem Dolor sit Ametttt',
            publisher: 'Akbar Muhammad',
            pageCount: 200,
            readPage: 30,
            reading: false,
            bookId: '',
        },
        updateWithoutName: {
            year: '2011',
            author: 'Jane Doe',
            summary: 'Lorem Dolor sit Ametttt',
            publisher: 'Akbar Muhammad',
            pageCount: 200,
            readPage: 30,
            reading: false,
            bookId: '',
        },
        updateReadMoreThanPage: {
            name: 'Buku B',
            year: '2011',
            author: 'Jane Doe',
            summary: 'Lorem Dolor sit Ametttt',
            publisher: 'Akbar Muhammad',
            pageCount: 200,
            readPage: 300,
            reading: false,
            bookId: '',
        },
    },
    testCase: {
        BookshelfAddBook: {
            positive: {
                addBookWithCompleteData: 'User successfully add book with complete data',
            },
            negative: {
                addBookWithoutName: 'User get error when add book without name',
                addBookWithPageReadMoreThanPageCount: 'User get error when add book with Page Read more than Page Count',
            },
        },
        BookshelfGetBook: {
            positive: {
                getAllBooks: 'User successfully get all book',
                getBookWithValidId: 'User successfully get book with valid ID',
            },
            negative: {
                getDetailBooksWithInvalidId: 'User get error when get detail book with invalid ID',
            },
        },
        BookshelfUpdateBook: {
            positive: {
                updateBooksCompleteData: 'User successfully update book with complete data',
            },
            negative: {
                updateBooksWithoutName: 'User get error when update book without name detail',
                updateBooksPageReadMoreThanPageCount: 'User get error whan update book with Page Read more than Page Count',
                updateBooksInvalidId: 'User get error when update detail book with invalid ID',
            }
        },
    },
    message: {
        successStatusCode: 201,
        createdMessage: 'Created',
        badRequestCode: 400,
        badRequestMessage: 'Bad Request',
        okStatusMessage: 'OK',
        okStatusCode: 200,
        notFoundMessage: 'Not Found',
        notFoundCode: 404,
        successMessage: 'success',
        failMessage: 'fail',
        successAddBook: 'Buku berhasil ditambahkan',
        failAddBook: 'Gagal menambahkan buku. Mohon isi nama buku',
        readPageWarning: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        failGetBook: 'Buku tidak ditemukan',
        successUpdateBook: 'Buku berhasil diperbarui',
        failUpdateBook: 'Gagal memperbarui buku. Mohon isi nama buku',
        failUpdateReadMoreThanPage : 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        failUpdateWithInvalidId : 'Gagal memperbarui buku. Id tidak ditemukan',
    },
    Detail: {
        allBooksId: '',
        invalidBookId: 'xxxx',
    },
    token: {
        tokenLogin: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWt1bmtvbXBhc2'
        + 'lkMjBAZ21haWwuY29tIiwiaWQiOiJmNGVlYmRhOS1jYzFhLTQzNzYtYTk5MC01YjBhNzZiYTQ3MTEiLCJydCI6'
        + 'MTcyMjgxOTM2Niwic2NvcGUiOlsicmVhZC1hcnRpY2xlIiwicmVhZC1wcm9maWxlIl19LCJleHAiOjE2OTEyOD'
        + 'QyNjYsImlhdCI6MTY5MTI4MzM2NiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmtvbXBhcy5jbG91ZCJ9.uzsTl-E'
        + 'CcONnFBsdMnXO6T6yf1FMRbAK9p3iPKCTUYkxdyodhBVUnaZrYkjdGb34YTZIAltUxjsHAwMo-8kdAlJpGS_48h'
        + '9GoattjAHBGl38hYpTJ-8Ef9EdpWHhvG1PDqpx0GYTd71PjXGN30L8JqbSryD2KiOukQcsZC_e9G2HZZg',
        tokenExpired: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGlnZW4ua29t'
        + 'cGFzLmlkIiwiaWF0IjoxNjIzMjM5OTM2LCJleHAiOjE2MjMyNDA4MzYsImRhdGEiOnsiaWQiOiJkNjcyN2M2Mi'
        + '1iNmU5LTQ4ZGEtOGEwNS1lZmNlMDEyN2FjMWUiLCJlbWFpbCI6Inl1bmkucHV0cmlAa29tcGFzLmNvbSIsInNj'
        + 'b3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfX0.Sj5QYRXlLAPVFR9rM0CidYO1hK_xJKBCyb'
        + 'lYkag49gnkU1swooxOSs_7k18V4K5LpgJh9UDQorz3dMZP7zaZVAOuFfeHkQF4KRyDMiE3t292sO0AwC50u9y8'
        + '6S0hoVkIm1Fd85Hw-Lf2PCS8k6gWEGeOd5bIpGevyHUVXoKaIQcnprM',
        tokenWrong: 'xx',
    },
};

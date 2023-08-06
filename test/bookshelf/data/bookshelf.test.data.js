module.exports = {
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
    message: {
        notFoundMessage: 'Not Found',
        statusMessage: 'OK',
        successMessage: 'success',
        failMessage: 'fail',
        okStatusCode: 200,
        successStatusCode: 201,
        notFoundCode: 404,
        booleanTrue: true,
        booleanFalse: false,
    },
    Detail: {
        allBooksId: '',
        invalidBooksId: 'xxxx'
    },
    testCase: {
        BookshelfGetBook: {
            positive: {
                getAllBooks: 'User successfully get all Books'
            },
            negative: {
                getDetailBooksWithInvalidId: 'User get error when get detail book with invalid ID'
            },
        },
    },
};

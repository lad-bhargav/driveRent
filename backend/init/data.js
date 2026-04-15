const cars = [
    {
        name: "Maruti Suzuki Brezza",
        price: 2000,
        model: "Brezza",
        img: "https://imgs.search.brave.com/eN6lja78X_ah_n0EuJl0nM6Hq5An0pYqhRqJhh4s88I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YXV0b2NhcmluZGlh/LmNvbS9HYWxsZXJp/ZXMvMjAyMjA2MzAx/MjEzMTNfQnJlenph/X2Zyb250LmpwZWc_/dz03MzYmaD00ODgm/cT03NSZjPTE",
        description: "A stylish compact SUV with strong hybrid system and bold looks.",
        modelyear: "2023",
        capacity: "5",
        avg: "19"
    },
    {
        name: "Maruti Suzuki Ertiga",
        price: 2200,
        model: "Ertiga",
        img: "https://imgs.search.brave.com/ZHdyoqzPpgUH7oLKLKsWVITmEVj2WwOkEbVhst7M6iE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzM3MHgyMDgvY3cv/ZWMvMzY5NTYvTmV3/LU1BcnV0aS1TdXp1/a2ktRXJ0aWdhLTE0/MDMwMC5qcGc_d209/MCZxPTgw",
        description: "A 7-seater MPV perfect for families with great fuel efficiency.",
        modelyear: "2023",
        capacity: "7",
        avg: "20"
    },
    {
        name: "Hyundai Creta",
        price: 2500,
        model: "Creta",
        img: "https://imgs.search.brave.com/1Jof9i-LAWNDPjZcUei7x7VuvvLjdyfQoSOJ16BWCJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xNjg2OTcv/Y3JldGEtbi1saW5l/LWV4dGVyaW9yLXJp/Z2h0LWZyb250LXRo/cmVlLXF1YXJ0ZXIt/MjUuanBlZz9pc2ln/PTAmcT04MA",
        description: "A popular compact SUV with bold styling and feature-packed interior.",
        modelyear: "2023",
        capacity: "5",
        avg: "17"
    },
    {
        name: "Hyundai Venue",
        price: 1800,
        model: "Venue",
        img: "https://imgs.search.brave.com/7YkV-5uuw-_GZM9eIvDnr2_NadY2ql432zkYtftOhQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/czMuYXV0b2Nhcmlu/ZGlhLmNvbS9oeXVu/ZGFpL1ZlbnVlL0RT/Q184MTc3LkpQRz93/PTcyOCZxPTc1",
        description: "A compact SUV ideal for city driving with connected car features.",
        modelyear: "2023",
        capacity: "5",
        avg: "18"
    },
    {
        name: "Hyundai i20",
        price: 1500,
        model: "i20",
        img: "https://imgs.search.brave.com/jCjwTULTzJJFpvRzaBMY4GAsers6tBaSMM28FTxAvFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2cx/MC5zY2VuZTcuY29t/L2lzL2ltYWdlL2h5/dW5kYWlhdXRvZXZl/ci9oeXVuZGFpLWFs/bC1uZXctaTIwLXN0/YXRpYy0wODpJbWFn/ZSUyMFZpZGVvJTIw/Q29sbGVjdGlvbiUy/MEl0ZW0lMjBNb2Jp/bGU_d2lkPTY2MyZo/ZWk9NDQx",
        description: "A premium hatchback with sporty design and turbo engine options.",
        modelyear: "2023",
        capacity: "5",
        avg: "20"
    },
    {
        name: "Maruti Suzuki Swift",
        price: 1200,
        model: "Swift",
        img: "https://imgs.search.brave.com/i1a5ekJ5lhxYsiX_2JO1H4AMv_NztoVWMx5AkCJ3poI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzY2NHg0MTUv/bi9jdy9lYy8xNTkw/OTkvc3dpZnQtZXh0/ZXJpb3ItZnJvbnQt/dmlldy5qcGVnP2lz/aWc9MCZxPTgw",
        description: "India's most loved hatchback with fun-to-drive character and great mileage.",
        modelyear: "2024",
        capacity: "5",
        avg: "23"
    },
    {
        name: "Hyundai Alcazar",
        price: 3000,
        model: "Alcazar",
        img: "https://imgs.search.brave.com/2v563KYjkj_9Pw2xh9qn70gUza1sTBAK577h_JJuRmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/djNjYXJzLmNvbS9t/ZWRpYS9tb2RlbC1p/bWdzLzY4OTg1NTAy/LWh5dW5kYWktYWxj/YXphci1mcm9udC1x/dWF0ZXItZXh0ZXJp/b3Iud2VicA",
        description: "A 6/7 seater SUV with premium features and powerful engine.",
        modelyear: "2022",
        capacity: "7",
        avg: "14"
    },
    {
        name: "Maruti Suzuki Baleno",
        price: 1400,
        model: "Baleno",
        img: "https://imgs.search.brave.com/cgKH4WX3hRiHbLGV2bNrPZWL4qr8hlDgGbdtH0TOPYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/czMuYXV0b2Nhcmlu/ZGlhLmNvbS9NYXJ1/dGktU3V6dWtpL0Jh/bGVuby9HVF8wNzY2/NS5KUEc_dz03Mjgm/cT03NQ",
        description: "A premium hatchback with spacious cabin and advanced safety features.",
        modelyear: "2023",
        capacity: "5",
        avg: "22"
    },
    {
        name: "Maruti Suzuki Grand Vitara",
        price: 2800,
        model: "Grand Vitara",
        img: "https://imgs.search.brave.com/FsV-aLtmPK2VS2ZYxAGpjk6W_hcnK6iUZqkljaumLgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFydXRpL0dyYW5k/LVZpdGFyYS8xMjQ3/Ny8xNzc0NTA4MDM4/MjA0L2V4dGVyaW9y/LWltYWdlLTE2NC5q/cGc_dHI9aC0xOTQ",
        description: "A strong hybrid SUV with excellent mileage and premium features.",
        modelyear: "2023",
        capacity: "5",
        avg: "27"
    },
    {
        name: "Hyundai Verna",
        price: 2200,
        model: "Verna",
        img: "https://imgs.search.brave.com/nNBd5jQmzTnk5ziMhCcqi-ZUus0-BPhKFZhsMfJcmyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YXV0b2NhcmluZGlh/LmNvbS9SZXZpZXdz/LzIwMjMwMzMwMDE1/MjU5XzEuanBnP3c9/NzAwJmM9MA",
        description: "A sleek and powerful sedan with turbo petrol engine and ADAS safety.",
        modelyear: "2023",
        capacity: "5",
        avg: "20"
    },
];

module.exports = { data: cars };
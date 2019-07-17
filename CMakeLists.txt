cmake_minimum_required(VERSION 3.14)
project(algorithm)

set(CMAKE_CXX_STANDARD 17)

set(FILE_SOURCES
    main.cpp
    CircularQueue.h
    CodingInterview.h
    Test.h
)
add_executable(algorithm ${FILE_SOURCES})
CMAKE_MINIMUM_REQUIRED(VERSION 3.14)
PROJECT(algorithm)
SET(CMAKE_CXX_STANDARD 17)

FILE(GLOB files *.h *.cpp)
FOREACH(file IN LISTS files)
    MESSAGE(STATUS ${file})
ENDFOREACH(file)

add_executable(algorithm ${files})
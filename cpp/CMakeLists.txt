CMAKE_MINIMUM_REQUIRED(VERSION 3.14)
PROJECT(algorithm)
SET(CMAKE_CXX_STANDARD 17)

file(GLOB_RECURSE files *.cc )
list(FILTER files EXCLUDE REGEX "cmake-build-.+")
FOREACH(file ${files})
    MESSAGE(STATUS ${file})
    get_filename_component(t ${file} NAME_WE)
    add_executable(${t} ${file} )
ENDFOREACH(file)



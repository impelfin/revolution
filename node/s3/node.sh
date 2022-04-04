#!/bin/bash

nodeps=$(ps -ef | grep 'node index.js')

pid="$(echo ${nodeps} | cut -d " " -f2)"
is_node="$(echo ${nodeps} | cut -d " " -f8)"

if [ $1 = "status" ]
then
    if [ $is_node = "node" ]
    then
        echo "Process ID : " $pid " => node is running"
    else
        echo "node is NOT running"
    fi
elif [ $1 = "start" ]
then
    if [ $is_node = "node" ]
    then
        kill -9 $pid
        echo "Process ID : " $pid " => node is restarting..."
    else
        echo "Process ID : " $pid " => node is starting..."
    fi
    nohup node index.js > /dev/null 2>&1 &
elif [ $1 = "stop" ]
then
    if [ $is_node = "node" ]
    then
        kill -9 $pid
        echo "Process ID : " $pid " => Successfully stopped node"
    else
        echo "node already stopped!"
    fi
else
    echo "Invalid Parameter!"
fi

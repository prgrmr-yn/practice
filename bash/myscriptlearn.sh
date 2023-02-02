#!/bin/bash

LEARNING FROM LEARN LINUX TV

echo 'Hello World!'

echo 'My current working directory is: '
pwd


# Add the cron job
(crontab -l ; echo "46 9 * * * echo 'This is some text' >> /Users/yatin/code/prgrmr-yn/practice/bash/filename.txt") | crontab -

# Confirm the cron job has been added
echo "Cron job has been set to run every morning at 8am."


myname='yatin'
myage='40'
filess=$(pwd)

echo "Hello, my name is $myname"
echo "I'm $myage years old"
echo $filess

now=$(date)

echo 'The system time and date is : '
echo $now
echo "$EDITOR"

expr  2 + 2


mynum=200

if [ $1 -eq 200 ]
if [ ! $mynum -eq 200 ] # -ne

if [ $mynum -eq 200 ]
then
    echo 'The condition is true'
else
    echo 'The condition is not true'
fi

filename=/Users/yatin/code/prgrmr-yn/practice/bash/filenae.txt
if [ -f  $filename ]
then
    echo 'file exists'
else
    echo 'file does not exist , creating a new file....'
    touch $filename
    echo 'file has been created'
fi
command='ls coolies'

if [ -d coolies ]
then
    echo "Exit code: $?"
else
    echo "Exit code: $?"
    echo 'action could not be performed' >> logs.log
fi

ls coolies >> logs.log 2>&1

if [ $? -eq 0 ]
then
    echo 'success'
else
    echo 'not success'
fi
exit 199

directory=/etc

if [ -d $directory ]
then
    echo 'Directory exists'
    exit 0
else
    echo 'Directory not existe'
    exit 1
fi

echo 'if exit then i wont run'

mynumm=1

while [ $mynumm -le 10 ]
do
    echo $mynumm
    mynumm=$(( $mynumm + 1 ))
    touch "hello$mynumm.js"
    sleep 0.7
done


while [ -f testfile ]
do
    sleep 5
    echo "As of $(date), the test file exist"
done

echo "As of $(date), the test file has gone missing"

brew update

if [ $? -eq 0 ]
then
    echo 'Running command "brew upgrade"'
    brew upgrade
else
    echo 'There are no update'
fi


echo 'What is your name: '
read name
echo "Your name is $name"

check_exit_status() {
  if [ $? -eq 0 ]
  then
      echo 'exit code is clean'
  else
      echo 'there is a problem'
  fi
}

ls /coolies 2>> logs.err
check_exit_status

ls $1

lines=$(ls $1 | wc -l)

if [ $# -ne 1 ]
then
    echo 'The script requires exactly one argument'
    exit 121
fi

echo "You have $(($lines)) objects in the $1 direcory at $(date)"

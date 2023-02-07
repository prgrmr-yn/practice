#!/bin/bash

# x=22


# echo "Hello World"
# echo -n Good to see you "\n\n"
# echo Thanks
# echo -e "HI \t\t\t There \n\n\n"
# echo -E "BYE \t\t\t For Now \n\n\n"


# # declare -l lstring="AFSD"

# lc(){
#     case "$1" in
#         [A-Z])
#         n=$(printf "%d" "'$1")
#         n=$((n+32))
#         printf \\$(printf "%o" "$n")
#         ;;
#         *)
#         printf "%s" "$1"
#         ;;
#     esac
# }
# word="I Love Bash"
# for((i=0;i<${#word};i++))
# do
#     ch="${word:$i:1}"
#     lc "$ch"
# done

# ls -l


# for i in dog cat elephant
# do
#     sleep 0.5
#     echo i is $i
# done


# for num in `seq 1 5`
# do
#     echo $num
#     sleep 0.4
# done


# for al in {a..z}
# do
#     echo $al
# done


# read a  <./setx.sh
# echo $a

# bash --version

# curdir=$(pwd)

# ls >> $curdir/list.txt
# ls /coolies 1>>list.txt 2>>error.txt

# echo {1..10}
# echo {10..1}

# echo {a..z}
# echo {z..a}

# echo {01..10}
# echo {01..10..2}
# echo {a..z..2}

# greeting="Hello there"

# echo $greeting
# echo ${greeting:4}
# echo ${greeting:4:4}
# echo ${greeting/there/everybody/}
# echo ${greeting//e/a}
# echo $(uname -v)

# echo $(( 2 + 4 ))
# echo $(( 2 - 1 ))

# echo -e 'hello world'; echo ' hi'
# echo -n 'hello world'; echo ' hi'



# echo 3 + 4.3 | bc

# test [ ... ]
# [ 2 -lt 5 ] ; echo $?
# [ 'cat' -eq 'cat' ]; echo $?
# [ 4 -mt 3 ]
# [[ -d ~ && -a /bin/bash ]]; echo $?

# true && echo success
# false && echo success

# echo -e "This test/nbreaks over/nthree lines"

# color variables
# foreground and background
# echo -e "\033[92;100mColor Text\033[0m" # bright green
# echo -e "\033[92mColor Text\033[1m" # bg with dark bg
# echo -e "\033[95mSomething went wrong\033[0m" # bg with dark bg

# echo 'hello'

# ulinered="\033[4;31;40m"
# red="\033[31;40m"
# # none="\033[0m"

# echo -e $ulinered"ERROR: "$none$red" Something went wrong"

# arrays

# declare -a snacks=("apple" "banana" "orange")
# echo ${snacks}
# snacks[4]='mango'

# declare -A office
# ${office[city]}='San Fransisco'
# ${office['building name']}="HQ West"

# echo ${office['city']}

# declare -i a=7

# if [[ $a -gt 4 ]]
# then
#     echo $a is greater than 4
#   if [[ $a -gt 8 ]]
#   then
#       echo $a is greater than 8
#   else
#       echo $a is not greater than 8
#   fi
# else
#     echo $a is not greater than 4
# fi

# echo 'While loop'

# declare -i n=0

# while [ $n -lt 10 ]
# do
#     echo "n:$n${n++}"
#     (( n++ ))
# done

# declare -a fruits=("apple" "banana" "cherry")
# for i in ${!fruits[@]}
# do
#     echo i: ${fruits[$i]}
# done

#   echo ${fruits[@]}

# echo 'Files available in this directory'
# for i in *
# do
#     echo "Found a file: $i"
# done


# animal="birdy"

# case $animal in
#   bird) echo 'I found a parrot';;
#   dog|puppy) echo 'I found rambo';;
#   *) echo 'coulnt find anyone'
# esac


# greet() {
#   echo "Hi $1, what a nice $2!"
# }

# echo 'And now a greeting!'
# greet Yatin evening


# numberthings() {
#   i=1
#   for f in "$@"; do
#     echo $i: "$f"
#   done
#   echo $FUNCNAME
# }

# numberthings /*
# echo
# numberthings pine irch maple spruce

# var=5

# myfuc() {
#   var=1
#   local var1=2
# }

# echo $var

# for i in 1 2 3 4 5
# do
#     echo "This is line $i" >> list.txt
# done

# while read f
# do echo "I read a line and it says : $f"
# done < list.txt


# echo $(( 0 + $RANDOM % 10 ))
# echo "The $0  script got the argument: $1"


# while getopts u:p:ab option; do
#     case $option in
#         u)  user=$OPTARG;;
#         p) pass=$OPTARG;;
#         a) echo 'got the a flag';;
#         b) echo 'got the b flag';;
#         ?) echo 'Flag doesnt exist'
#     esac
# done

# echo "user: $user / pass: $pass"

# echo "What is your name?"
# read name

# echo "What is your pass?"
# read -s pass

# read -p "What is your favourite animal? " animal

# echo name: $name, pass: $pass, animal: $animal

# select animal in "bird" "dog" "fish" "quit"
# do
#     case $animal in
#         bird) echo 'Birds like to fly';;
#         dog) echo 'dogs like to bark';;
#         fish) echo 'fish like to eat other fishes';;
#         quit) break;;ip
#         *) echo "i'am not sure what that is "
#     esac
# done

# if (( $#<3 )); then
#     echo 'The command takes 3 args'
#     echo username, userid and favid
# else
#     echo $1 $2 $3
# fi


# read -p "Facourity animal [cat]    " fav
# if [[ -z $fav ]]; then
#     fav="cat"
# fi

# echo "$fav was selected"

read -p "What year? [nnnn] " year
until [[ $year =~ [0-9]{4} ]]; do
    read -p "A four-digit year please![nnnn] " year
done

echo "Selected year: $year"

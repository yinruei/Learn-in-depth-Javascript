"""
Write a program that given a number 
(with arbitrary number of digits), 
converts it into LCD style numbers using the following format:

   _  _     _  _  _  _  _  
 | _| _||_||_ |_   ||_||_|  
 ||_  _|  | _||_|  ||_| _|  
(each digit is 3 lines high)

Note: Please do NOT read the second part before completing the first. 
Part of the purpose of this kata is to make you practice refactoring 
and adapting to changing requirements.
"""


def lcd_converter(num):
    pass

def get_display_num(num):
    display = [[], [
        [" ", " ", " "],
        [" ", " ", "|"],
        [" ", " ", "|"]
    ], [
        [" ", "_", " "],
        [" ", "_", "|"],
        ["|", "_", " "]
    ], [
        [" ", "_", " "],
        [" ", "_", "|"],
        [" ", "_", "|"]
    ], [
        [" ", " ", " "],
        ["|", "_", "|"],
        [" ", " ", "|"]
    ], [
        [" ", "_", " "],
        ["|", "_", " "],
        [" ", "_", "|"]
    ], [
        [" ", "_", " "],
        ["|", "_", " "],
        ["|", "_", "|"]
    ], [
        ["", "_ ", " "],
        ["", " ", "|"],
        ["", " ", "|"]
    ], [
        [" ", " ", " "],
        [" ", " ", "|"],
        [" ", " ", " "]
    ]
    ]

    return display[num]

def lcd(num):
    display = [[], [], []]

    num_str = str(num)
    for n in num_str:
        n = get_display_num(int(n))
        display[0].extend(n[0])
        display[1].extend(n[1])
        display[2].extend(n[2])

    print_lcd(display)

def print_lcd(display):
    for display_line in display:
        print(''.join(display_line))

if __name__ == "__main__":
    lcd(12345678)
    

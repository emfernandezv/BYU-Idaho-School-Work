using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstConsoleApplication
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string strName = "Eduardo Fernandez";
            string strLocation = "Kirkland, WA";
            Console.WriteLine($"My name is {strName}, I am from {strLocation}");

            DateTime dt = DateTime.Now;
            Console.WriteLine($"The current date is: {dt.ToString("MM/dd/yyyy")}");

            DateTime xmassDt = DateTime.Parse("12/25/2023");
            Console.WriteLine($"Days until Christmas: {(xmassDt - dt).TotalDays}");

            double width, height, woodLength, glassArea; 
            string widthString, heightString;

            Console.WriteLine("Please insert the width: ");
            widthString = Console.ReadLine(); 
            width = double.Parse(widthString);

            Console.WriteLine("Please insert the height: ");
            heightString = Console.ReadLine(); 
            height = double.Parse(heightString);
            woodLength = 2 * (width + height) * 3.25; 
            glassArea = 2 * (width * height); 
            
            Console.WriteLine("The length of the wood is " + woodLength + " feet"); 
            Console.WriteLine("The area of the glass is " + glassArea + " square metres");

            Console.ReadKey();


        }
    }
}

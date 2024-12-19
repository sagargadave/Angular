#include<stdio.h>

int main()
{
    int n = 0;
    printf("Enter a Number of elements : ");
    scanf("%d",&n);

    int arr[n];

    int even = 0, odd = 0;

    for(int i=0; i<n; i++)
    {
        scanf("%d",&arr[i]);

        if(arr[i] % 2 == 0)
        {
            odd +=  arr[i];
        }
        else
        {
            even += arr[i];
        }        
    }

    printf("Differences between odd and even : %d",1*(even-odd));
}
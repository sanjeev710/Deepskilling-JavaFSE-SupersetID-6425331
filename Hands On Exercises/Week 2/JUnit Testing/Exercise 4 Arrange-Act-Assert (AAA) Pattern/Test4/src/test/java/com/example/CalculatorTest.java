package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed.");
    }

    @After
    public void tearDown() {
        calculator.clearMemory();
        System.out.println("Teardown completed.");
    }

    @Test
    public void testAddition() {
        int a = 3;
        int b = 7;

        int result = calculator.add(a, b);

        assertEquals(10, result);
    }

    @Test
    public void testMultiplication() {
        int x = 4;
        int y = 5;

        int result = calculator.multiply(x, y);

        assertEquals(20, result);
    }
}


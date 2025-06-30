package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class MathUtilsTest {

    @Test
    public void testMultiply() {
        MathUtils utils = new MathUtils();
        assertEquals(20, utils.multiply(4, 5));
    }

    @Test
    public void testIsEven() {
        MathUtils utils = new MathUtils();
        assertTrue(utils.isEven(4));
        assertFalse(utils.isEven(5));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        MathUtils utils = new MathUtils();
        utils.divide(10, 0);
    }

    @Test
    public void testDivide() {
        MathUtils utils = new MathUtils();
        assertEquals(5, utils.divide(10, 2));
    }
}


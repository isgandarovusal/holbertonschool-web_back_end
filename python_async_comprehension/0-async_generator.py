#!/usr/bin/env python3
"""
This module provides an asynchronous generator coroutine that loops
10 times, waiting asynchronously for 1 second each time, and
yielding a random float number.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Asynchronous generator that loops 10 times, sleeps for 1 second
    each iteration, and yields a random float value between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

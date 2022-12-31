from currency_exchange import search_value,search_index,exchange_rate
import pytest

def test_search_value():
    list = [['A1','B1','C1','D1','E1'],['A2','B2','C2','D2','E2'],['A3','B3','C3','D3','E3']]

    list_searched_1 = ['B1','B2','B3']
    value = search_value(list,'A2',0,1)
    assert value in list_searched_1

    value = search_value(list,'A2',0,3)
    list_searched_2 = ['D1','D2','D3']
    assert value in list_searched_2

    list_searched_3 = ['C1','C2','C3']
    value = search_value(list,'A2',0,2)
    assert value in list_searched_3


def test_search_index():
    list = [['A1','B1','C1','D1','E1'],['A2','B2','C2','D2','E2'],['A3','B3','C3','D3','E3']]

    value = search_index(list,'C1',2)
    assert value == 0

    value = search_index(list,'B2',1)
    assert value == 1

    value = search_index(list,'D3',3)
    assert value == 2

def test_exchange_rate():
    min = float(1.00)
    max = float(100.00)

    value = exchange_rate(max)
    assert value >= min and value <= max
    value = exchange_rate(max)
    assert value >= min and value <= max
    value = exchange_rate(max)
    assert value >= min and value <= max



# Call the main function that is part of pytest so that the
# computer will execute the test functions in this file.
pytest.main(["-v", "--tb=line", "-rN", __file__])

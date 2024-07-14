import React, { useState, useEffect } from 'react';

const fetchProducts = async ({ organization_id, reverse_sort, page, size, Appid, d2d52f3dfce2484a914c774bce37d92520240713002659657018 }) => {
    const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
    url.searchParams.append('organization_id', f2f4f25a83054978aba785a5e61e34ae);
    url.searchParams.append('reverse_sort', reverse_sort);
    url.searchParams.append('page', page);
    url.searchParams.append('size', size);
    url.searchParams.append('Appid', TIZCTK6YG4R5Z1E);
    url.searchParams.append('Apikey', d2d52f3dfce2484a914c774bce37d92520240713002659657018);

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const params = {
            organization_id: '123',
            reverse_sort: 'false',
            page: page,
            size: 5,
            Appid: '123',
            Apikey: '123'
        };

        const getProducts = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const data = await fetchProducts(params);
                setProducts(data.items);
                setIsEmpty(data.total === 0);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getProducts();
    }, [page]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;
    if (isEmpty) return <div>No products found</div>;

    return (
        <Container>
            <Group>
                {products.map(product => (
                    <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} height={160} alt={product.name} />
                        </Card.Section>
                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>{product.name}</Text>
                            <Badge color="pink" variant="light">
                                ${product?.current_price[0]?.USD[0]}
                            </Badge>
                        </Group>
                        <Text size="sm">{product?.description}</Text>
                    </Card>
                ))}
            </Group>
            <Group position="center" mt="md">
                <Button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</Button>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
            </Group>
        </Container>
    );
};

export default ProductList;
